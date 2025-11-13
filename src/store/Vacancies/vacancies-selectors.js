export const selectVacancies = (state) => state.vacancies;
export const selectSearchVacancies = (state, search) => {
  return state.vacancies.filter((el) =>
    el.position.toLowerCase().includes(search.toLowerCase().trim())
  );
};
