import express from "express";
import db from "./database/connection";

const routes = express.Router();

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

routes.post("/classes", async (request, response) => {
  const { name, avatar, bio, whatsapp, subject, cost, schedule } = request.body;

  const insertedUsersIds = await db("users").insert({
    name,
    avatar,
    bio,
    whatsapp,
  });

  const user_id = insertedUsersIds[0];

  const insertedClassesIds = await db("classes").insert({
    subject,
    cost,
    user_id,
  });

  const class_id = insertedClassesIds[0];
  const clasSchedule = schedule.map((scheduleItem: ScheduleItem) => {
    return {
      week_day: scheduleItem.week_day,
      from:
    };
  });

  return response.send();
});

export default routes;
