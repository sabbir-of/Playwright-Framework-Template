import { webHelper } from "@helper/webHelper";
import { Page, FrameLocator, Locator } from "@playwright/test";
import { InputText } from "components/InputText";


// Define a class 'reservationPage' to encapsulate operations related to a specific page.
export class yourPage extends webHelper {


    // Constructor to initialize the page object with a Playwright Page.
    // The WebHelper is also instantiated with this page.
    constructor(page: Page) {
        //We need the page, and a friendly name for the page to be used in reports
        super(page, 'CMS Page');
        const noByRole = false;
        





    }

//storeLink_page_elements
readonly logo = this.page.locator(`#add-to-cart-sauce-labs-backpack`);

}