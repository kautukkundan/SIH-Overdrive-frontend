const M = [
  "chris",
  "christian",
  "daniel",
  "elliot",
  "joe",
  "justen",
  "mark",
  "matt",
  "matthew",
  "nom",
  "steve",
  "stevie",
  "tom"
];
const F = [
  "ade",
  "helen",
  "jenny",
  "laura",
  "lena",
  "lindsay",
  "molly",
  "nan",
  "rachel",
  "veronika",
  "zoe"
];

const getAvatar = gender => {
  if (gender === "M") {
    var avatar = M[Math.floor(Math.random() * M.length)];
  } else if (gender === "F") {
    var avatar = F[Math.floor(Math.random() * F.length)];
  }

  return avatar;
};

export default getAvatar;
