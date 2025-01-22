import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../src/components/Header";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render Header Component with a login Button", () => {
  // initial check the header comp is rendered successfully without any errors
  // we include provider as we used useSelector(redux) in header,we inc so testing lib undertands
  // include BrowserRouter, as we used link in header for router which this lib doesn't understand
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button");
  expect(loginButton).toBeInTheDocument();
});
it("should render Header Component with a cart of 0 items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart-(0 Items)");
    expect(cartItems).toBeInTheDocument();
  });
  it("should change login Button to logout Button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name:"Login"});
    expect(loginButton).toBeInTheDocument();
    // to perform click action on this button
    // use fireEvent
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
  });
