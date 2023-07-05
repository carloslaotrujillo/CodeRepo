import { faker } from "https://cdn.skypack.dev/@faker-js/faker@6.0.0-alpha.6";

const NUM_COMPANIES = 20;
const NUM_USERS = 200;

(function () {
  if (window.userData) {
    return;
  }

  // We want to make sure there's duplicate companies so we have collisions during sort
  const companies = new Array(NUM_COMPANIES).
  fill(null).
  map(() => faker.company.companyName());
  const getCompany = () => companies[Math.floor(Math.random() * NUM_COMPANIES)];

  // 25% chance to be a site admin
  const getIsSiteAdmin = () => Math.ceil(Math.random() * 10) % 4 === 0;

  const data = new Array(NUM_USERS).fill(null).map((_val, index) => ({
    id: index,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    company: getCompany(),
    jobTitle: faker.name.jobTitle(),
    state: faker.address.state(),
    isSiteAdmin: getIsSiteAdmin(),
    dateJoined: faker.datatype.datetime().toString() }));


  window.userData = data;
})();

const App = () => {
  return /*#__PURE__*/React.createElement("div", null, "TODO add your solution here");
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));