module.exports = {
  root: true,
  // 설치한 플러그인의 lint 규칙을 실제로 어떻게 적용할지 명시
  // airbnb - 에어비앤비가 사용하는 eslint 규칙을 가져와 적용
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier',
    // recommended - eslint-config-react에서 제공하는 추천 설정
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  // eslint는 기본적으로 순순 js만 이해하기 때문에, 자바스크립트 확장 문법을 이해할 수 있도록 변환해야 함
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourchType: 'module', // esm 방식을 사용해도 오류로 인식하지 않도록
  },
  // lint는 미리 선언하지 않고 접근하는 변수에 대한 오류를 내기 때문에
  // 각 실행 환경에서 접근 가능한 전역 객체애 대한 설정을 알려주는 옵션
  env: {
    browser: true,
  },
  // eslint가 기본으로 제공하는 설정 외 추가 설정을 가능하게 하는 플러그인
  plugins: ['prettier', 'react', '@typescript-eslint', 'react-hooks'],
  // exteds로 설정된 lint 규칙을 override하며, 세부 lint 설정을 제어할 수 있음
  // 다만 세부 설정이 너무 많을 경우 유지 보수 측면에서 불리함
  rules: {},
  ignorePatterns: ['build', 'dist', 'public'],
};
