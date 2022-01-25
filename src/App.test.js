import App from './App';
import Adapter from 'enzyme-adapter-react-16'
import { mount, configure } from "enzyme";

configure({ adapter: new Adapter() })

describe("Renders Header Componenet", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<App />)
    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders without crashing", () => {
        expect(wrapper.length).toEqual(1);
    });

    it("should trigger onChange", () => {
        const search = wrapper.find("input")
        search.props().value = "BTC";
        search.simulate("change", {
            target: { value: "btc" }
        });
        expect(search.props().value).toEqual("BTC");
        search.simulate("change", {
            target: { value: "" }
        });
        expect(search.props().value).toEqual("BTC");
    });
});



