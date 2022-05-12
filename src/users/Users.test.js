import axios from "axios";
import { render, screen } from "@testing-library/react";
import { Users } from "./Users";

jest.mock("axios");

describe("Users component testing", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret"
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette"
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha"
        }
      ]
    };
  });
  test("Asynchronous users loading", async () => {
    axios.get.mockReturnValue(response);
    render(<Users />);
    const users = await screen.findAllByTestId("user");
    expect(users).toHaveLength(3);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
  });
});
