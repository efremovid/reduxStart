export const ADD_VACANCIES = "vacancies/ADD_VACANCIES";

export const addVacancies = (vacancies) => {
  return {
    type: ADD_VACANCIES,
    payload: vacancies,
  };
};

console.log(addVacancies([]))