# ProductHub

A full-stack product management application built using **Next.js**, **React**, **MongoDB**, and **NextAuth** for authentication. Users can view products, and authenticated users can add new products.

## Features

* User authentication (email/password or GitHub)
* Protected routes for adding products
* Product listing and details page
* Responsive design with Tailwind CSS
* Backend API routes for CRUD operations

## Tech Stack

* **Frontend:** Next.js (App Router), React, Tailwind CSS
* **Backend:** Next.js API Routes
* **Database:** MongoDB (Mongoose)
* **Authentication:** NextAuth.js (Credentials and OAuth providers)
* **Deployment:** Vercel

## Installation & Setup

### Prerequisites

* Node.js (>= 16)
* MongoDB connection string
* GitHub OAuth credentials (if using GitHub login)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/producthub.git
   cd producthub
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
3. **Set up environment variables:** Create a `.env.local` file in the root directory and add:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_random_secret
   NEXTAUTH_URL=http://localhost:3000
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   ```
4. **Run the development server:**

   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Protected Pages

* **Add Product (/dashboard/add-product)**: Accessible only to authenticated users. If not logged in, users are redirected to the login page.

## Deployment

* Push to GitHub and connect the repository to Vercel for one-click deployment.
* Make sure to set environment variables in Vercel dashboard.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
