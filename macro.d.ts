declare module 'styled-jsx-container/macro' {
  namespace macro {
    function resolve(
      chunks: TemplateStringsArray,
      ...args: any[]
    ): {
      className: string
      styles: JSX.Element
    }
  }

  export = macro
}
