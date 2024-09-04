declare module '*.png'

//The point of this (and it is crucial that this file is named "index.d.ts") is to
//stop there from being a typescript error in the import statement within App.tsx
//where you import the images into the file. The reason for the error is that
//the code doesn't know what data type the images are, it doesn't recognise them,
//so you have to declare them as a module, and in order to do that, you need
//to have to index.d.ts file with this written in it.