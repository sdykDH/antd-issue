import FormInput from "./components/FormInput.vue"
import SubmitButton from "./components/SubmitButton.vue"

export default {
    install(app) {
        app.component(`FormInput`, FormInput);
        app.component(`SubmitButton`, SubmitButton);
    }
}
