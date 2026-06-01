import Sports from "./Sports";

describe("Sports", () => {
  beforeEach(() => {
    global.Headers = jest.fn().mockImplementation(() => ({
      append: jest.fn(),
    }));
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ response: [] }),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("normalizes leading and trailing slashes in endpoint urls", async () => {
    const sports = new Sports("test-api-key");

    await sports.football("//leagues/", { id: 39 });

    expect(global.fetch).toHaveBeenCalledWith(
      "https://v3.football.api-sports.io/leagues?id=39",
      expect.objectContaining({
        method: "GET",
        redirect: "follow",
      })
    );
  });
});
