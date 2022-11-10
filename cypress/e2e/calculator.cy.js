beforeEach(() => {
      //arrange
      cy.visit('http://127.0.0.1:5501/index.html')
})

//Testing all number buttons
describe('testing number buttons', () => {
  it('Press number  1, 2, 3, 0 and 1, 2, 3, 0 shows on screen', () => {
    //act
    cy.get('.calcuArea__1').click()
    cy.get('.calcuArea__2').click()
    cy.get('.calcuArea__3').click()
    cy.get('.calcuArea__0').click()
    //assert
    cy.get('.calcuArea__display').should("contain", "1230")
  })
})

describe('testing number buttons', () => {
  it('Press number 4, 5, 6, and 4, 5, 6 shows on screen', () => {
    //act
    cy.get('.calcuArea__4').click()
    cy.get('.calcuArea__5').click()
    cy.get('.calcuArea__6').click()
    //assert
    cy.get('.calcuArea__display').should("contain", "456")
  })
})

describe('testing number buttons', () => {
  it('Press number 7, 8, 9, and 7, 8, 9 shows on screen', () => {
    //act
    cy.get('.calcuArea__7').click()
    cy.get('.calcuArea__8').click()
    cy.get('.calcuArea__9').click()
    //assert
    cy.get('.calcuArea__display').should("contain", "789")
  })
})

//testing operator buttons work
describe('testing the addition operator works', () => {
  it('Press + and + will show on the screen', () => {
    //act
    cy.get('.calcuArea__add').click()
    //assert
    cy.get('.calcuArea__display').should("contain", "+")
  })
}) 

describe('testing the minus operator works', () => {
  it('Press - and - will show on the screen', () => {
    //act
    cy.get('.calcuArea__subtract').click()
    //assert
    cy.get('.calcuArea__display').should("contain", "-")
  })
}) 

describe('testing the multiplay operator works', () => {
  it('Press x and x will show on the screen', () => {
    //act
    cy.get('.calcuArea__multiply').click()
    //assert
    cy.get('.calcuArea__display').should("contain", "x")
  })
}) 

describe('testing the divide operator works', () => {
  it('Press / and / will show on the screen', () => {
    //act
    cy.get('.calcuArea__devide').click()
    //assert
    cy.get('.calcuArea__display').should("contain", "/")
  })
}) 

describe('testing the percentage operator works', () => {
  it('Press % and % will show on the screen', () => {
    //act
    cy.get('.calcuArea__percent').click()
    //assert
    cy.get('.calcuArea__display').should("contain", "%")
  })
}) 

describe("testing if the clear button, clears the display", () => {
  it("Press the C button will clear the display", () => {
    //act
    cy.get('.calcuArea__1').click()
    cy.get('.calcuArea__clear').click()
    //assert
    cy.get('.calcuArea__display').should("contain", "")
  })
})

describe("If you press the decimal button, a decimal should not appear", () => {
  it("Press the decimal button and nothing happens", () => {
    //act
    cy.get('.calcuArea_operator').click()
    //assert
    cy.get('.calcuArea__display').not("contain", ".")
  })
})

//checking if functions are working
describe("testing if the addition function works", () => {
  it("Pressing 1 + 1 will present the answer 2 on the display", () => {
    //act 
    cy.get('.calcuArea__1').click()
    cy.get('.calcuArea__add').click()
    cy.get('.calcuArea__1').click()
    cy.get('.calcuArea__equals').click()
    //asset
    cy.get('.calcuArea__display').should("contain", "2")
  })
})

describe("testing if the minus function works", () => {
  it("Pressing 2 - 1 will present the answer 1 on the display", () => {
    //act 
    cy.get('.calcuArea__2').click()
    cy.get('.calcuArea__subtract').click()
    cy.get('.calcuArea__1').click()
    cy.get('.calcuArea__equals').click()
    //asset
    cy.get('.calcuArea__display').should("contain", "1")
  })
})

describe("testing if the multiply function works", () => {
  it("Pressing 2 x 2 will present the answer 4 on the display", () => {
    //act 
    cy.get('.calcuArea__2').click()
    cy.get('.calcuArea__multiply').click()
    cy.get('.calcuArea__2').click()
    cy.get('.calcuArea__equals').click()
    //asset
    cy.get('.calcuArea__display').should("contain", "4")
  })
})

describe("testing if the division function works", () => {
  it("Pressing 4 / 2 will present the answer 2 on the display", () => {
    //act 
    cy.get('.calcuArea__4').click()
    cy.get('.calcuArea__devide').click()
    cy.get('.calcuArea__2').click()
    cy.get('.calcuArea__equals').click()
    //asset
    cy.get('.calcuArea__display').should("contain", "2")
  })
})

describe("testing if the percentage function works", () => {
  it("Pressing 10 % 100 will present the answer 10 on the display", () => {
    //act 
    cy.get('.calcuArea__1').click()
    cy.get('.calcuArea__0').click()
    cy.get('.calcuArea__percent').click()
    cy.get('.calcuArea__1').click()
    cy.get('.calcuArea__0').click()
    cy.get('.calcuArea__0').click()
    cy.get('.calcuArea__equals').click()
    //asset
    cy.get('.calcuArea__display').should("contain", "10")
  })
})

//Testing for bugs
describe("testing if you press a second operator will it continue the sum", () => {
  it("Pressing a second operator will display a new sum", () => {
    //act
    cy.get('.calcuArea__1').click()
    cy.get('.calcuArea__add').click()
    cy.get('.calcuArea__1').click()
    cy.get('.calcuArea__equals').click()
    cy.get('.calcuArea__multiply').click()
    cy.get('.calcuArea__2').click()
    cy.get('.calcuArea__equals').click()
    //assert
    cy.get('.calcuArea__display').should("contain", "4")
  })
})

describe ("testing if you press another operator without the equals will it do the sum", () => {
  it ("Without pressing the equals button will a sum continue", () => {
    //act
    cy.get('.calcuArea__1').click()
      cy.get('.calcuArea__add').click()
      cy.get('.calcuArea__1').click()
      cy.get('.calcuArea__multiply').click()
      cy.get('.calcuArea__2').click()

    //assert
    cy.get('.calcuArea__display').not("contain", "1 + 1 x 2").should("contain", "1 x 12")
  })
})
