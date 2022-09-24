

const costumersList = {} 
class standAccount {
  // Id
  userName
  Name
  adress 
  creditCardNumber  
  expiryDate
  coffeCoin
  constructor(username,name,  adress, creditCardNumber, expiryDate, cCoin = 0){
    this.userName = username
    this.Name = name
    this.adress = adress
    this.creditCardNumber = creditCardNumber
    this.expiryDate = expiryDate 
    this.coffeCoin = cCoin
    
  }
  addCoin(amount){
    this.coffeCoin+= Math.abs(amount)
  }
  retractCoin (amount){
    this.coffeCoin -= Math.abs(amount)
  }
}




class premAccount extends standAccount {
  giftCoin
  constructor(userName, name, adress, creditCardNumber, expiryDate, coffeCoin, gift){
    super(
      userName, name, adress, creditCardNumber, expiryDate, coffeCoin
    )
    this.giftCoin = gift
    addGiftCoin()
  }

  addGiftCoin(spent){
    this.giftCoin+= Math.abs(Math.round(spent*.2))
  }
}





