module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  rules: {
    // 布尔值类型的 propTypes 的 name 必须为 is 或 has 开头
    // @off 不强制要求写 propTypes
    "react/boolean-prop-naming": "off",
    // 一个 defaultProps 必须有对应的 propTypes
    // @off 不强制要求写 propTypes
    "react/default-props-match-prop-types": "off",
    // 组件必须有 displayName 属性
    // @off 不强制要求写 displayName
    "react/display-name": "off",
    // 禁止在自定义组件中使用一些指定的 props
    // @off 没必要限制
    "react/forbid-component-props": "off",
    // 禁止使用一些指定的 elements
    // @off 没必要限制
    "react/forbid-elements": "off",
    // 禁止使用一些指定的 propTypes
    // @off 不强制要求写 propTypes
    "react/forbid-prop-types": "off",
    // 禁止直接使用别的组建的 propTypes
    // @off 不强制要求写 propTypes
    "react/forbid-foreign-prop-types": "off",
    // 禁止使用数组的 index 作为 key
    // @off 太严格了
    "react/no-array-index-key": "off",
    // 禁止使用 children 做 props
    "react/no-children-prop": "error",
    // 禁止使用 dangerouslySetInnerHTML
    // @off 没必要限制
    "react/no-danger": "off",
    // 禁止在使用了 dangerouslySetInnerHTML 的组建内添加 children
    "react/no-danger-with-children": "error",
    // 禁止使用已废弃的 api
    "react/no-deprecated": "error",
    // 禁止在 componentDidMount 里面使用 setState
    // @off 同构应用需要在 didMount 里写 setState
    "react/no-did-mount-set-state": "off",
    // 禁止在 componentDidUpdate 里面使用 setState
    "react/no-did-update-set-state": "error",
    // 禁止直接修改 this.state
    "react/no-direct-mutation-state": "error",
    // 禁止使用 findDOMNode
    "react/no-find-dom-node": "error",
    // 禁止使用 isMounted
    "react/no-is-mounted": "error",
    // 禁止在一个文件创建两个组件
    // @off 有一个 bug https://github.com/yannickcr/eslint-plugin-react/issues/1181
    "react/no-multi-comp": "off",
    // 禁止在 PureComponent 中使用 shouldComponentUpdate
    "react/no-redundant-should-component-update": "error",
    // 禁止使用 ReactDOM.render 的返回值
    "react/no-render-return-value": "error",
    // 禁止使用 setState
    // @off setState 很常用
    "react/no-set-state": "off",
    // 禁止拼写错误
    "react/no-typos": "error",
    // 禁止使用字符串 ref
    "react/no-string-refs": "error",
    // 禁止在组件的内部存在未转义的 >, ", " 或 }
    "react/no-unescaped-entities": "error",
    // @fixable 禁止出现 HTML 中的属性，如 class
    "react/no-unknown-property": "error",
    // 禁止出现未使用的 propTypes
    // @off 不强制要求写 propTypes
    "react/no-unused-prop-types": "off",
    // 定义过的 state 必须使用
    // @off 没有官方文档，并且存在很多 bug： https://github.com/yannickcr/eslint-plugin-react/search?q=no-unused-state&type=Issues&utf8=%E2%9C%93
    "react/no-unused-state": "off",
    // 禁止在 componentWillUpdate 中使用 setState
    "react/no-will-update-set-state": "error",
    // 必须使用 Class 的形式创建组件
    "react/prefer-es6-class": [
      "error",
      "always"
    ],
    // @fixable props 与 value 之间的等号前后禁止有空格
    "react/jsx-equals-spacing": [
      "error",
      "never"
    ],
    // 数组中的 jsx 必须有 key
    "react/jsx-key": "error",
    // @fixable 限制每行的 props 数量
    // @off 没必要限制
    "react/jsx-max-props-per-line": "off",
    // jsx 中禁止使用 bind
    // @off 太严格了
    "react/jsx-no-bind": "off",
    // 禁止在 jsx 中使用像注释的字符串
    "react/jsx-no-comment-textnodes": "error",
    // 禁止在 jsx 中出现字符串
    // @off 没必要限制
    "react/jsx-no-literals": "off",
    // 禁止使用 target="_blank"
    // @off 没必要限制
    "react/jsx-no-target-blank": "off",
    // 禁止使用未定义的 jsx elemet
    "react/jsx-no-undef": "error",
    // 禁止使用 pascal 写法的 jsx，比如 <TEST_COMPONENT>
    "react/jsx-pascal-case": "error",
    // @fixable props 必须排好序
    // @off 没必要限制
    "react/jsx-sort-props": "off",
    // 限制文件后缀
    // @off 没必要限制
    "react/jsx-filename-extension": "off",

    "import/prefer-default-export": [
      0
    ],
    // 禁止出现重复的 props
    "react/jsx-no-duplicate-props": "error",
    // @fixable jsx 的开始和闭合处禁止有空格
    "prefer-destructuring":[0],
    "react/jsx-tag-spacing":[0],
    "object-shorthand":[0],
    // "react/jsx-tag-spacing": [
    //   "error",
    //   {
    //     "closingSlash": "never",
    //     "beforeSelfClosing": "always",
    //     "afterOpening": "never"
    //   }
    // ],
    // jsx 文件必须 import React
    "react/jsx-uses-react": "error",
    // 定义了的 jsx element 必须使用
    "react/jsx-uses-vars": "error",
    // @fixable 多行的 jsx 必须有括号包起来
    // @off 没必要限制
    "react/jsx-wrap-multilines": "off",
    // @fixable 第一个 prop 必须得换行
    // @off 没必要限制
    "react/jsx-first-prop-new-line": "off",
    // handler 的名称必须是 onXXX 或 handleXXX
    // @off 没必要限制
    "react/jsx-handler-names": "off",
    // 必须使用 pure function
    // @off 没必要限制
    "react/prefer-stateless-function": "off",
    // 组件必须写 propTypes
    // @off 不强制要求写 propTypes
    "react/prop-types": "off",
    // 出现 jsx 的地方必须 import React
    // @off 已经在 no-undef 中限制了
    "react/react-in-jsx-scope": "off",
    // 非 required 的 prop 必须有 defaultProps
    // @off 不强制要求写 propTypes
    "react/require-default-props": "off",
    // 组件必须有 shouldComponentUpdate
    // @off 没必要限制
    "react/require-optimization": "off",
    // render 方法中必须有返回值
    "react/require-render-return": "error",
    // @fixable 组件内没有 children 时，必须使用自闭和写法
    // @off 没必要限制
    "react/self-closing-comp": "off",
    // @fixable 组件内方法必须按照一定规则排序
    "react/sort-comp": "error",
    // propTypes 的熟悉必须按照字母排序
    // @off 没必要限制
    "react/sort-prop-types": "off",
    // style 属性的取值必须是 object
    "react/style-prop-object": "error",
    // HTML 中的自闭和标签禁止有 children
    "react/void-dom-elements-no-children": "error",
    // @fixable 布尔值的属性必须显式的写 someprop={true}
    // @off 没必要限制
    "react/jsx-boolean-value": "off",
    // @fixable 自闭和标签的反尖括号必须与尖括号的那一行对齐
    "react/jsx-closing-bracket-location": [
      "error",
      {
        "nonEmpty": false,
        "selfClosing": "line-aligned"
      }
    ],
    // @fixable 结束标签必须与开始标签的那一行对齐
    // @off 已经在 jsx-indent 中限制了
    "react/jsx-closing-tag-location": "off",
    'generator-star-spacing': [0],
    'consistent-return': [0],
    'no-useless-concat': "off",
    // 'react/forbid-prop-types': [0],
    // 'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'global-require': [1],
    // 'import/prefer-default-export': [0],
    // 'react/jsx-no-bind': [0],
    // 'react/prop-types': [0],
    // 'react/prefer-stateless-function': [0],
    // 'react/jsx-wrap-multilines': [
    //   'error',
    //   {
    //     declaration: 'parens-new-line',
    //     assignment: 'parens-new-line',
    //     return: 'parens-new-line',
    //     arrow: 'parens-new-line',
    //     condition: 'parens-new-line',
    //     logical: 'parens-new-line',
    //     prop: 'ignore',
    //   },
    // ],
    'no-else-return': [0],
    'no-restricted-syntax': [0],
    'import/no-extraneous-dependencies': [0],
    'no-use-before-define': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/anchor-is-valid': [0],
    'no-nested-ternary': [0],
    'prefer-template': [0],
    'no-unused-vars': [0],
    'no-param-reassign': [0],
    'react/sort-comp': [0],
    'import/no-duplicates': [0],
    'no-unneeded-ternary': [0],
    'arrow-body-style': [0],
    'spaced-comment': [0],
    'import/extensions': [0],
    'no-bitwise': [0],
    'no-cond-assign': [0],
    'import/no-unresolved': "off",
    'import/no-useless-concat': [0],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'object-curly-newline': [0],
    'function-paren-newline': [0],
    'no-restricted-globals': [0],
    'require-yield': [1],
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    polyfills: ['fetch', 'promises'],
  },
};