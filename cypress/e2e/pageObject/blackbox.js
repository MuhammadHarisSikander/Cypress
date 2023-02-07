//how use token in Get api in cypress?
Cypress.Commands.Add('login', (userName, password) => {
    cy.request({
        method: 'POST',
        url: 'https://odms.baitussalam.org:8445/api/v1/auth/login',
        body: {
            userName,
            password,
        }
    })
        .as('loginResponse')
        .then((response) => {
            Cypress.env('token', response.body.accessToken); // either this or some global var but remember that this will only work in one test case
            return response;
        })
        .its('status')
        .should('eq', 200);
})


describe('testing token', () => {
    beforeEach(() => {
        cy.login();
    });

    it('test request', () => {
        const token = Cypress.env('token');
        const authorization = `bearer ${token}`;
        const options = {
            method: 'GET',
            url: `https://odms.baitussalam.org:8445/api/v1/qurbani-representative`,
            headers: {
                authorization,
            }
        };

        cy.request(options)
            .its('status')
            .should('eq', 200);
    })
});


Cypress.Commands.overwrite('request', (originalFn, ...options) => {
    const optionsObject = options[0];
    const token = Cypress.env('token');

    if (!!token && optionsObject === Object(optionsObject)) {
        optionsObject.headers = {
            authorization: 'Bearer ' + token,
            ...optionsObject.headers,
        };

        return originalFn(optionsObject);
    }

    return originalFn(...options);
});


describe('testing token', () => {
    beforeEach(() => {
        cy.login();
    });

    it('test request', () => {
        cy.request(options)
            .its('status')
            .should('eq', 200);
    })
});




//Source: https://stackoverflow.com/questions/61569780


