export const selectVacancies = (state) => state.vacancies;
export const selectSearchVacancies = (state, search, filters) => {
  return state.vacancies.filter((el) => {
    const tags = [el.role, el.level, ...el.languages, ...el.tools];
   return el.position.toLowerCase().includes(search.toLowerCase().trim()) &&
      filters.every((element) => tags.includes(element));
  });
};
