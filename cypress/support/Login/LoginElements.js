//elementos da pagina login

export const ELEMENTS = {

    //campos e botões

    cmpEmail: '[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input',
    cmpSenha:'[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input',
    btnLogin:'[data-test="login-submit"]',

    //campos para asserts

    assertBemvindo:'[data-test="dashboard-welcome"]',
    assertEmail:'.MuiFormHelperText-root',
    assertSenha:'[data-test="alert"]',
}