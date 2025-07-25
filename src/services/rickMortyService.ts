import { httpService } from "./httpService";

export const rickMortyService = {
  query,
  getById,
};

const CHARACTER_END_POINT = "/character";

function query() {
  return httpService.get(CHARACTER_END_POINT);
}

function getById(characterId: number) {
  return httpService.get(`${CHARACTER_END_POINT}/${characterId}`);
}
