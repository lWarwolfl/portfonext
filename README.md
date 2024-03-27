# Portfonext

Portfonext is a portfolio website created using Next.js (TypeScript) and styled with modular SCSS. It contains reusable components that can be utilized in other projects as well.

## Features

- Next.js framework for server-side rendering and optimized performance.
- TypeScript for type safety and enhanced development experience.
- Modular SCSS for scalable and maintainable styling.
- Reusable components that can be easily integrated into other projects.

## Getting Started

To get started with Portfonext, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/portfonext.git
   ```

2. Navigate to the project directory:

   ```bash
   cd portfonext
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm run dev
   ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the Portfonext portfolio website.

## Directory Structure

The project's directory structure is as follows:

```
portfonext/
  ├── src/
    ├── components/        # Project components
    ├── components/utils   # Reusable components
    ├── data/              # Constant Data For Each Section
    ├── pages/             # Next.js pages
    ├── styles/            # SCSS stylesheets
    ├── lib/               # Reusable Scripts And Hooks
```

## Customizations

If you would like to use Portfonext as your own portfolio, you can use these features:

1. Utilize the `colors.scss` file to define your custom colors. Then, incorporate these custom colors into the `src/lib/types.ts` file to ensure they are accessible across all utility components.
2. For displaying your personalized data, populate the data files located within the `src/data/` directory with your specific content.
3. Store your customized logo, favicon, preview images, loading indicators, and other relevant images in the `/public` directory to personalize the appearance of your project and use your own ```Resume.pdf``` as well.
4. Provide the necessary properties to the WebGL particle effect in ```MainLayout.tsx``` to tailor its behavior and appearance to your preferences.
5. Modify the GSAP animations in ```MainLayout.tsx``` to achieve your desired visual effects. For comprehensive guidance on GSAP, refer to the official documentation at [GSAP Documentation](https://gsap.com/docs/v3/). This resource will provide you with detailed instructions and examples for customizing animations to enhance your project's interactivity and visual appeal.

## Contributing

If you would like to contribute to Portfonext, follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name for your feature or bug fix.
3. Commit your changes and push the branch to your forked repository.
4. Open a pull request on the main repository and provide a detailed description of your changes.

Please ensure that your contributions align with the project's coding style and follow the existing conventions.

## License

The Portfonext project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or inquiries, please reach out to the project maintainer:

- Name: Mohamad Sina Kheiri
- Email: sinakheiri.dev@gmail.com

Feel free to open an issue on GitHub if you encounter any problems or have suggestions for improvement.

## Special Thanks

A heartfelt thanks to Studio Freight, the creators of [Lenis](https://lenis.darkroom.engineering/), for their outstanding work. Utilizing their WebGL particle effect and smooth scrolling functionality has significantly improved the Portfonext user experience.

Happy coding!
