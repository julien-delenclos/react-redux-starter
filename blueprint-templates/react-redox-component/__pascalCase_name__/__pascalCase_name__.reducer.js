const initialState = {
  {{camelCase name}}s: []
}

export default function {{pascalCase name}}(state = initialState, action) {
  switch (action.type) {

  case '{{upperSnakeCase name}}_LIST_CHANGE':
    return {
      ...state,
      {{camelCase name}}s: action.{{camelCase name}}s
    }

  default:
    return state
  }
}
