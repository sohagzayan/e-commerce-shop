import author1 from "../assets/product/author1.png";
import author2 from "../assets/product/author2.png";
import author3 from "../assets/product/author3.png";
import author4 from "../assets/product/author4.png";

export const authorImages = [author1, author2, author3, author4];

export interface heroContentTypes {
  title: string;
  describe: string;
  class: string;
}

export const heroContent: heroContentTypes[] = [
  {
    title: `For Everything and Everyone`,
    describe:
      "Even if your less into design and more into content strategy you may find some redeeming value with, wait for it, dummy copy.",
    class: "singleSlide1",
  },
  {
    title: "Charge Your Phone Safely!",
    describe:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    class: "singleSlide2",
  },
  {
    title: "Featured  Accessories ",
    describe:
      "A client that’s unhappy for a reason is a problem, a client that’s unhappy though required he or her can’t quite put a finger..",
    class: "singleSlide3",
  },
];
