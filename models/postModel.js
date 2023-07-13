import mongoose from "mongoose";
import moment from "moment";

// Buat objek Date dengan tanggal dan waktu saat ini
const date = new Date();

// Gunakan moment untuk memformat tanggal ke dalam format yang diinginkan
const formattedDate = moment(date).format("MMMM Do YYYY, h:mm a");
const postSchema = mongoose.Schema(
  {
    profilePicture: {
      type: String, 
      required: false
    },
    username: {
      type: String, 
      required: true
    },
    firstname: {
      type: String,
      required: true,
    },
    userId: {
      type: String, 
      required: true
    },

    //@ Mengubah Require menjadi false
    // menghapus desc 
    // desc: {
    //   type: String,
    // },
    comments: [ {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      required: false
    } ],
    likes: [],
    createdAt: {
      type: String,
      default: formattedDate,
    },
    // createdAt: {  
    //   type: String,
    //   default: moment().tz("Asia/Jakarta").format("MMMM Do YYYY, h:mm:ss a ", "Asia/Jakarta")
    // },
    image: String,

    // new update post
    video : String,

    // tweet fitur 
    tweet : String
  },
  {
    timestamps: true,
  }
);

var PostModel = mongoose.model("Posts", postSchema);

export default PostModel;
