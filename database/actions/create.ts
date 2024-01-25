"use server"

import { connectToDatabase } from ".."
import Created from "../models/replicate_createdmodel";
import User from "../models/uploadedmodel"
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API,
});
export async function createUser({ fullname, email, imgUrl ,targtedimg}: any) {
  try {
    await connectToDatabase();


    const newUser = await User.create({
      fullname,
      email,
      imgUrl,
      targtedimg
    });
    const output = await replicate.run(
  "omniedgeio/face-swap:c2d783366e8d32e6e82c40682fab6b4c23b9c6eff2692c0cf7585fc16c238cfe",
  {
    input: {
      swap_image: imgUrl,
      target_image:targtedimg,
    }
  }
);
  const upload_created_url = await Created.create({
    fullname,
      email,
      createdUrl:output,
  })

    return JSON.parse(JSON.stringify(output));
  } catch (error) {
    console.log(error);
    // Handle the error appropriately, for example by throwing it again
    throw error;
  }
}