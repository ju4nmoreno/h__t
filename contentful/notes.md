# Contentful

## Why contentful?

### A massive market shift

Contentful was designed to be the content layer of the modern enterprise software stack. As
opposed to proprietary and monolithic “suites,” Contentful is an API-first, cloud-native SaaS that
was designed for easy integration into modern, microservice-based architectures.

### Stacks beat suites

The way that companies build software has totally changed. It’s about stacks, not suites; microservices, not monoliths.

### build products faster

Structed content

- flexibility by creating you components so it can be reused
- it flexible enough
- it's context-agnostic, independent from mediums, platforms, programming languages, etc.
- It’s also not tied to opinionated data models like a traditional CMS

Decoupled architecture

- The content is decoupled from the presentation layer
- it was built to connect with other platforms and services
- It’s composable, allowing you to use only what you need, and adopt new features as you grow
- It scales confidently on an enterprise-tested platform

Agile workflows

- It was born agile, purpose-built to integrate with software delivery pipelines, developer environments, and automation
- It changes with your software and workflows
- It lets you iterate and experiment fast, inside your software delivery pipeline

### enterprise are replatforming on contentful

Telus (Canada)

### contentful's api-first approach

The API-first CMS works by abstracting representations of your data, defining “types” of data that can be stored and instances of data that adhere to these types.

### power content across all your digital channels

Developers
either use the Content Management API directly, or CLI tools we provide built on top of the
Content Management API to create content models, perform automated testing, etc

### contentful runs as a SAAS

Contentful runs as a SaaS on AWS
For companies accepting credit card payments
Scale and High Availability platform types are both PCI DSS compliant (multi-region)

## Content delivery Architectures

### where and when does rendering happen?

1. Dynamic on server:
   A server-side app receives a request from an end user, retrieves content from Contentful (and possibly other data sources), renders the content, and sends it
   back in response. (such as backend for frontend or server-side rendering)
   typically based on Java or Node.js

   | Pros                                                 | Cons                                |
   | ---------------------------------------------------- | ----------------------------------- |
   | lots of languages and framework                      | Server-related scalability (\$\$\$) |
   | reactive - no stale data                             | Higher page latency                 |
   | Easier SEO                                           | Requires external caching or CDN    |
   | Secure secrets (API tokens not exposed to end users) | Potential single point of failure   |

2. Static site generator:
   A static site generator fetches content from Contentful at timed intervals and then builds the rendered HTML pages and stores them on a static web host.

   | Pros                                                 | Cons                                                          |
   | ---------------------------------------------------- | ------------------------------------------------------------- |
   | Easier SEO                                           | no immediate preview/potential for stale data                 |
   | Offline capability                                   | web page-centric                                              |
   | static HTML is fast and simple server                | genration time ca be problematic for frequent content changes |
   | secure secrets (API tokens not exposed to end-users) | Requires external hosting, caching, and CDN                   |

3. Dynamic on device:
   A client-side app using the Contentful SDKs requests content from
   the Contentful APIs and renders the content on the device.

   | Pros                               | Cons                                  |
   | ---------------------------------- | ------------------------------------- |
   | Simple                             | SEO support requires more effort      |
   | Reactive - no stale data           | Possible browser compatibility issues |
   | fully leverages the Contentful CDN |                                       |

4. Dinamic hybrid with node.js
   A hybrid approach of using a JavaScript framework such as React, which supports isomorphic
   execution on both the server and front-end device, combines the benefits of both the Dynamic
   on Server and Dynamic on Device approaches. Initial page rendering can be executed on the
   Node.js server and sent to the device, with the JavaScript framework taking over rendering
   from that point on.

   | Pros                                 | Cons                              |
   | ------------------------------------ | --------------------------------- |
   | Lots fo laguages & framework options | complexity of architecture        |
   | reactive - no stale data             | potential single point fo failure |
   | Easier SEO                           |                                   |
   | fully leverages the Contentful CDN   |                                   |

## Contentful CORE APIs

### four core rest APIs

1. content managent API
   Developers can access the CMA securely via HTTPS, and it
   will be available to clients authenticating with an access token.

There are two types of content management
tokens:
• Personal access tokens - use if you’re using the Content Management API to
access data from your own Contentful user account
• OAuth tokens - Use if you’re building a public integration that requests access
to other Contentful user’s data

### content delivery API

available at cdn.
contentful.com, is a highly available, highly scalable, read-only API for delivering content
to apps, websites, and other channels. Content is delivered as JSON data, and images,
videos and other media as files.

### SDKS

We have SDKs for JavaScript (Node.js), PHP, Android (Java), iOS (Swift), Java, Python, Ruby and .NET.

### GrapQL Content API

