export const fetch{{pascalCase name}}s = () => (dispatch) => {
  dispatch({ type: '{{upperSnakeCase name}}_LIST_CHANGE', {{camelCase name}}s : [] })
}
