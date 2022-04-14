$(document).ready(() => {
  const dogs = {
    dog1: {
      name: "Benji",
      info: "Benji has recently turned 4! A fun loving dog, who is happy to play with any dog at any age.",
      fact: "A fact about Benji: I can run super fast and I am the top achiever in agility training!",
    },
    dog2: {
      name: "Bruno",
      info: "Bruno is one of our older dogs, aged just 10! Still has bundles of energy and knows a trick or two for a snack!",
      fact: "Bruno's fact: I have beautiful different coloured eyes that make me stand out.",
    },
    dog3: {
      name: "Roscoe",
      info: "Roscoe is our adventure dog! Loves to visit nature and the outdoor world. Roscoe has been with us now for a whole year!",
      fact: "A Roscoe Fact: I tend to lead the way on walks! Follow me for an adventure.",
    },
    dog4: {
      name: "George",
      info: "George is a cuddle loving Malshi. He loves to play with people and toys, and will certainly curl up next to you for a cuddle and a treat!",
      fact: "George's fact: How to tell I am excited to see you? I can jump on my back 2 legs and use my front 2 to paw at you!",
    },
    dog5: {
      name: "Rebel",
      info: "Rebel by name and Rebel by nature! A lovely dog who just knows how to add enough mischief to make you laugh.",
      fact: "Rebel's fact: I can sleep for days. Come to me for a chill.",
    },
    dog6: {
      name: "Frankie",
      info: "Frankie is a newbie here at Doggo Pals. Little shy but can get involved when you bring toys into the mix!",
      fact: "A fact for Frankie: I love toys. I will make sure you do too as I always love to play with them with you!",
    },
    dog7: {
      name: "Peppa",
      info: "The mum of the group! As a rescue dog who had pups, Peppa knows how to care for her fellow Doggo Pal!",
      fact: "Peppa's fact: I love to care for other dogs and make sure they are having a great time.",
    },
    dog8: {
      name: "Louie",
      info: "Louie is the youngest of our group at age 2! The centre of every picture and is loving his swimming lessons, and has won swimmer of the week!",
      fact: "Louie's fact: I may look small, but I beat most of our class in swimming races!",
    },
  };

  $(".dogpic").on("click", (e) => {
    const thisDog = e.target.id;
    const dogName = dogs[thisDog].name;
    const dogInfo = dogs[thisDog].info;
    const dogFact = dogs[thisDog].fact;

    $(".dogname").html(dogName);
    $(".doginfo").html(dogInfo);
    $(".dogfact").html(dogFact);
    $(".modal").removeClass("hidden");
  });

  const closeModal = () => {
    $(".dogname").html("");
    $(".doginfo").html("");
    $(".modal").addClass("hidden");
  };

  $(".closemodal").on("click", () => {
    closeModal();
  });

  $(document).on("keydown", (event) => {
    if (event.key == "Escape") {
      closeModal();
    }
  });
});
