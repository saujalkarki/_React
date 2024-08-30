function Navbar() {
  return (
    <>
      <h1>this is a navbar1</h1>
      <h1>this is a navbar2</h1>
      <h1>this is a navbar3</h1>
      <h1>this is a navbar4</h1>
      <h1>this is a navbar5</h1>
      <h1>this is a navbar6</h1>
      <h1>this is a navbar7</h1>
      <h1>this is a navbar8</h1>
      <p
        onClick={() => {
          alert("This has been clicked");
        }}
      >
        This is a paragraph
      </p>

      {/* 
      vite--->
      vite is a modern frontend tooling
      1.fast and efficient development experience
      2.Hot Module Reload (HMR)
      3.production and development both cases

      babel--->
      Babel is a popular javascript compiler

      Client Side Rendering (CSR)
      =>React, Vue, Angular 
      Server Side Rendering (SSR)
      =>Next, Remix, ejs =>SEO ranking help
 
       */}
    </>
  );
}

export default Navbar;

// React

/*
React is based on components
There are 2 types of componenets in react:
1. Class based components
Object Oriented programming class 
2. Function based components (functional components)
Function name ko 1st letter chai jaile pani Capital hunu parxa
*/

/*cases
camelCase- saujalBahadurKarki, nareshLama
snakeCase- saujal_bahadur_karki, naresh_lama
KebabCase- saujal-bahadur-karki, naresh-lama
pascalCase- SaujalBahadurKarki, NareshLama
*/
