# do-test - A simple react demo

## Setup Instruction

Install the packages using command

### `npm i`

Start the development server using

### `npm start`

You should be redirected to the demo website. The URL should be as [http://localhost:3000](http://localhost:3000)

## Notes

- PropType linter rule is set to off to save development time. In real production environment PropType is crucial to validate on runtime and using it along with Typescript will enchanhed development experience
- Backend apis mocked call is not set to async. This is due to unnecassary called to be make as demo, and will increase the development to handle the error case as IT WILL NEVER FAIL ;)
- I cheated on storing the username on cookies. Since I cannot find a way to done this without prop drilling, I found storing username is cookies is simplier to implement without state management library
- Reponsiveness is not guarantee
