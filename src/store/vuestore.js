import { createStore } from "vuex";
import { userModule } from "./userstore";
import { roleModule } from "./rolestore";

export default createStore({
    modules: {
        user: userModule,
        role: roleModule
    }
})