import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

type User {
  id: ID!
  email: String!
  password: String!
  lastLogin: String
  session: String @deprecated(reason: "Use getSession query instead")
}

type Customer {
  id: ID!
  name: String!
  billingAddress: String!
  defaultShippingAddress: String!
  user: User!
  shoppingCart: [ShoppingCart!]!
  orders: [Order!]!
}

type ShoppingCart {
  id: ID!
  productId: ID!
  customer: Customer!
}

type Order {
  id: ID!
  customer: Customer!
  orderDate: String!
  status: String!
  price: Float!
  orderDetails: OrderDetails!
}

type OrderDetails {
  id: ID!
  order: Order!
  shippingAddress: String!
  shippingType: String!
  shippingCost: Float!
  billingAddress: String!
  createdDate: String!
}

type Query {
  getSession(userId: ID!): String
  getCustomer(id: ID!): Customer
  getOrders(customerId: ID!): [Order]
  getShoppingCart(customerId: ID!): [ShoppingCart]
}

type Mutation {
  signUp(name: String!, email: String!, password: String!, billingAddress: String!, defaultShippingAddress: String!): Customer
  login(email: String!, password: String!): String

  addProductToCart(customerId: ID!, productId: ID!): ShoppingCart
  removeProductFromCart(customerId: ID!, productId: ID!): Boolean
  checkOut(customerId: ID!): Order

  placeOrder(customerId: ID!): Order
  cancelOrder(orderId: ID!): Boolean
  updateOrderStatus(orderId: ID!, status: String!): Order
}
