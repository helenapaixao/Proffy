import express from "express";
import db from "./database/connection";

const routes = express.Router();

routes.post("/classes", async (request, response) => {
  const { name, avatar, bio,whatsapp, subject, cost, schedule } = request.body;

  await db("users").insert({
      name,
      avatar,
      bio,
      whatsapp,
  });

  return response.send();
});

export default routes;
