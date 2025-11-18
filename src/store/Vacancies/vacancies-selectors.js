export const selectVacancies = (state) => state.vacancies;
export const selectSearchVacancies = (state, search) => {
    return state.vacancies.filter((el) =>
        el.position.toLowerCase().includes(search.toLowerCase().trim())
    );
};
export const selectFilterVacancies = (state, filters) => {
    return state.vacancies.filter((el) => {
        const tags = [el.role, el.level, ...el.languages, ...el.tools]
        return filters.every((element) => tags.includes(element))
    })
}


