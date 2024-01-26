import { db } from "../db";

export const getUsers = (_: any, res: any) => {
  const q = "SELECT * FROM users";

  db.query(q, (err: any, data: any) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
