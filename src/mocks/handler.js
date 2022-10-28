import { rest } from "msw";

export const handlers = [
    rest.get(`http://localhost:5000/product`, (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    id: 1,
                    todo: "todo2",
                    isCompleted: false,
                    userId: 1,
                },
                {
                    id: 2,
                    todo: "todo3",
                    isCompleted: false,
                    userId: 1,
                },
            ])
        );
    }),
];
