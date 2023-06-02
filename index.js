document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      const fname = document.querySelector("#fname").value;
      const mname = document.querySelector("#mname").value;
      const lname = document.querySelector("#lname").value;
      const dob = document.querySelector("#dob").value;
      const student_id = document.querySelector("#student-id").value;
      const student_add = document.querySelector("#student-add").value;
      const city = document.querySelector("#city").value;
      const state = document.querySelector("#state").value;
      const country = document.querySelector("#country").value;
      const zip_code = document.querySelector("#zip-code").value;
      const email = document.querySelector("#email").value;
      const language = document.querySelector("#language").value;
      const course = document.querySelector(".course").value;
      const level = document.querySelector(".level").value;
      const month = document.querySelector(".month").value;
      const comment = document.querySelector("#comment").value;
      // const empty_tag = document.querySelector("#empty-tag").value;
  
      // document.querySelector("#file").addEventListener("change", saveFileToStorage);
      
      // function saveFileToStorage(e) {
      //     const fr = new FileReader();
      //     fr.readAsDataURL(e.target.files[0])
      //     fr.addEventListener('load', ()=>{
      //         const url = fr.result;
      //         localStorage.setItem('image', url)
      //     })
      // }
  
  
      console.log(file);
      localStorage.setItem(
        "studentInfo",
        JSON.stringify({
          fname,
          mname,
          lname,
          dob,
          student_add,
          student_id,
          city,
          state,
          country,
          zip_code,
          email,
          language,
          course,
          level,
          month,
          comment,
          // empty_tag,
        })
      );
      location.replace("preview.html");
    });
  });