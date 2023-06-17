// Sports.spec.js
import Sports from "./Sports"; // assuming your Sports class is in Sports.js
import axios from "axios";

jest.mock("axios");

describe("Sports", () => {
  const mockAPIKey = "YOUR_KEY_HERE"; // replace with your key
  const mockUrl = "/fixture";
  const mockParams = { league: "test" };
  const mockResponse = { data: "testData" };

  beforeEach(() => {
    axios.request.mockResolvedValue(mockResponse);
  });

  it("should make a football request with correct parameters", async () => {
    const sports = new Sports(mockAPIKey);
    const data = await sports.football(mockUrl, mockParams);

    expect(axios.request).toHaveBeenCalledWith({
      method: "GET",
      url: `https://v3.football.api-sports.io/${mockUrl}`,
      params: mockParams,
      headers: {
        "X-RapidAPI-Key": mockAPIKey,
        "X-RapidAPI-Host": "v3.football.api-sports.io",
      },
    });

    expect(data).toEqual(mockResponse.data);
  });
});
