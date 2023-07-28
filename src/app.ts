import HouseController from './controllers/HouseController'
import UserController from './controllers/UserController'
import BookingController from './controllers/BookingController'

async function main() {
    const userController = new UserController()
    const houseController = new HouseController()
    const bookingController = new BookingController()

    const user = await userController.create({
        name: 'silva',
        email: 'meu@email.com',
    })

    const house = await houseController.create({
        title: 'Studio Completo com Escritorio',
        description: 'Studio com cozinha',
    })

    const booking = await bookingController.create({
        startDate: new Date(),
        endDate: new Date('2023-07-27'),
        houseId: 'cb214fa5-9ef0-4a7a-8040-7c1c9e182acd',
        userId: '6f1e6244-0ef5-4b23-8285-ea8038b8bee8',
    })
    const bookings = await bookingController.findAll()

    console.log(bookings)
}

main()
