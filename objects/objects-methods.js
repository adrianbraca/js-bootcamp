let restaurant = {
    name: 'AsB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        //add seats to guest count
        this.guestCount += partySize
    },
    removeParty: function (partySize) {
        //remove seats from guest count
        this.guestCount -= partySize
    }
}

restaurant.seatParty(10)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))

