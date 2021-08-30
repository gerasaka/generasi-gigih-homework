import { useLocation } from "react-router-dom";


import Header from "../../components/layout/Header";

const NoMatch = () => {
  return (
    <>
      <Header />
      <div>
        <h3>
          No match for <code>{useLocation().pathname}</code>
        </h3>
      </div>
    </>
  )
}

export default NoMatch;