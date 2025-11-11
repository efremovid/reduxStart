export const SEARCH_VACANCY = "search/SEARCH_VACANCY";

export const searchVacancy = (vacancy) => {
  return {
    type: SEARCH_VACANCY,
    payload: vacancy,
  };
};
