const hodData = [
  {
    department: "Electronics and Communication Engineering",
    alias: ["ECE"],
    name: "Dr. Suman Maloji",
    cabin: "R-403",
    facultyList: [
  { sno: 1, name: "Dr. Suman Maloji", designation: "Professor & HOD", cabin: 101 },
  { sno: 2, name: "Dr. A. S. Chandra Sekhara Sastry", designation: "Professor", cabin: 102 },
  { sno: 3, name: "Dr. Vullanki Rajesh", designation: "Professor", cabin: 103 },
  { sno: 4, name: "Dr. Habibulla Khan", designation: "Professor", cabin: 104 },
  { sno: 5, name: "Dr. Kotamaraju Sarat Kumar", designation: "Professor", cabin: 105 },
  { sno: 6, name: "Dr. Chinnari Sri Kavya Korada", designation: "Professor", cabin: 106 },
  { sno: 7, name: "Dr. B.T.P. Madhav", designation: "Professor", cabin: 107 },
  { sno: 8, name: "Dr. Madhavareddy Venkata Narayana", designation: "Professor", cabin: 108 },
  { sno: 9, name: "Dr. Immadi Govardhini", designation: "Professor", cabin: 109 },
  { sno: 10, name: "Dr. Kakarla Hari Kishore", designation: "Professor", cabin: 110 },
  { sno: 11, name: "Dr. Venkata Ratnam Devanaboyina", designation: "Professor", cabin: 111 },
  { sno: 12, name: "Dr. Seeram Srinivasa Rao", designation: "Professor", cabin: 112 },
  { sno: 13, name: "Dr. Mohammad Zia Ur Rahman", designation: "Professor", cabin: 113 },
  { sno: 14, name: "Dr. Polurie Venkata Vijay Kishore", designation: "Professor", cabin: 114 },
  { sno: 15, name: "Dr. Pokkunuri Pardha Saradhi", designation: "Professor", cabin: 115 },
  { sno: 16, name: "Dr. Karumuri Srinivasa Rao", designation: "Professor", cabin: 116 },
  { sno: 17, name: "Dr. Sujatha Moorthy", designation: "Professor", cabin: 117 },
  { sno: 18, name: "Dr. M. Siva Ganga Prasad", designation: "Professor", cabin: 118 },
  { sno: 19, name: "Dr. Patcha Satya Srinivas Babu", designation: "Professor", cabin: 119 },
  { sno: 20, name: "Dr. Thirumuru Rama Krishna", designation: "Professor", cabin: 120 },
  { sno: 21, name: "Dr. Ravi Kumar Mokkapati", designation: "Associate Professor", cabin: 121 },
  { sno: 22, name: "Dr. B. Srinivasa Kumar", designation: "Associate Professor", cabin: 122 },
  { sno: 23, name: "Dr. Grande Suresh Kumar", designation: "Associate Professor", cabin: 123 },
  { sno: 24, name: "Dr. Kallakunta Ravi Kumar", designation: "Associate Professor", cabin: 124 },
  { sno: 25, name: "Dr. Gorla Venkata Ganesh", designation: "Associate Professor", cabin: 125 },
  { sno: 26, name: "Dr. Munuswamy Siva Kumar", designation: "Associate Professor", cabin: 126 },
  { sno: 27, name: "Dr. Syed Shameem", designation: "Associate Professor", cabin: 127 },
  { sno: 28, name: "Dr. Mareedu Venkata Durga Prasad", designation: "Associate Professor", cabin: 128 },
  { sno: 29, name: "Dr. Guda Rama Krishna Prasad", designation: "Associate Professor", cabin: 129 },
  { sno: 30, name: "Dr. Dokku Bhavana", designation: "Associate Professor", cabin: 130 },
  { sno: 31, name: "Dr. Vasipalli Subba Reddy", designation: "Associate Professor", cabin: 131 },
  { sno: 32, name: "Dr. Sreevardhan Cheerla", designation: "Associate Professor", cabin: 132 },
  { sno: 33, name: "Dr. Badugu Suresh", designation: "Associate Professor", cabin: 133 },
  { sno: 34, name: "Dr. Chakka Raghava Prasad", designation: "Associate Professor", cabin: 134 },
  { sno: 35, name: "Dr. Nalluri Siddaiah", designation: "Associate Professor", cabin: 135 },
  { sno: 36, name: "Dr. Devireddy Sreenivasa Rao", designation: "Associate Professor", cabin: 136 },
  { sno: 37, name: "Dr. Pathan Saleem Akram", designation: "Associate Professor", cabin: 137 },
  { sno: 38, name: "Dr. Gubbala China Satyanarayana", designation: "Associate Professor", cabin: 138 },
  { sno: 39, name: "Dr. Katta Rajesh Babu", designation: "Associate Professor", cabin: 139 },
  { sno: 40, name: "Dr. G. Sai Krishna Santosh", designation: "Associate Professor", cabin: 140 },
  { sno: 41, name: "Dr. Sampad Kumar Panda", designation: "Associate Professor", cabin: 141 },
  { sno: 42, name: "Dr. Ernest Ravindran R S", designation: "Associate Professor", cabin: 142 },
  { sno: 43, name: "Dr. Yalavarthi Usha Devi", designation: "Associate Professor", cabin: 143 },
  { sno: 44, name: "Dr. Kondaveeti Girija Sravani", designation: "Associate Professor", cabin: 144 },
  { sno: 45, name: "Dr. Lakshman Pappula", designation: "Associate Professor", cabin: 145 },
  { sno: 46, name: "Dr. Mannepalli Kasi Prasad", designation: "Associate Professor", cabin: 146 },
  { sno: 47, name: "Dr. N Prabakaran", designation: "Associate Professor", cabin: 147 },
  { sno: 48, name: "Dr. Vipul Agarwal", designation: "Associate Professor", cabin: 148 },
  { sno: 49, name: "Dr. Bhimavarapu John Philip", designation: "Associate Professor", cabin: 149 },
  { sno: 50, name: "Dr. Durga Prasad Tripathi", designation: "Associate Professor", cabin: 150 },
    { sno: 51, name: "Dr. Bukya Balaji", designation: "Associate Professor", cabin: 151 },
  { sno: 52, name: "Dr. Jyothi Ravi Kiran Kumar Dabbakuti", designation: "Associate Professor", cabin: 152 },
  { sno: 53, name: "Dr. M. Muzammil Parvez", designation: "Associate Professor", cabin: 153 },
  { sno: 54, name: "Dr. Chella Santhosh", designation: "Associate Professor", cabin: 154 },
  { sno: 55, name: "Dr. S Arun Metha", designation: "Associate Professor", cabin: 155 },
  { sno: 56, name: "Dr. Eepuri Kiran Kumar", designation: "Associate Professor", cabin: 156 },
  { sno: 57, name: "Dr. Aravind Kilaru", designation: "Associate Professor", cabin: 157 },
  { sno: 58, name: "Dr. Atul Kumar", designation: "Associate Professor", cabin: 158 },
  { sno: 59, name: "Dr. Aravindhan Alagarsamy", designation: "Associate Professor", cabin: 159 },
  { sno: 60, name: "Dr. Abhishek Pahuja", designation: "Associate Professor", cabin: 160 },
  { sno: 61, name: "Dr. Debajit Deb", designation: "Associate Professor", cabin: 161 },
  { sno: 62, name: "Dr. Sumit Bhushan", designation: "Associate Professor", cabin: 162 },
  { sno: 63, name: "Dr. Vivekananthan Venkateswaran", designation: "Associate Professor", cabin: 163 },
  { sno: 64, name: "Dr. Nagesh Mantravadi", designation: "Associate Professor", cabin: 164 },
  { sno: 65, name: "Dr. Nepalli Venkata Krishna Ramesh", designation: "Associate Professor", cabin: 165 },
  { sno: 66, name: "Dr. Merigala Rajanidevi", designation: "Associate Professor", cabin: 166 },
  { sno: 67, name: "Dr. Ranjan Kumar Mohapatra", designation: "Associate Professor", cabin: 167 },
  { sno: 68, name: "Dr. Narayanam V. Siva Kumari", designation: "Assistant Professor", cabin: 168 },
  { sno: 69, name: "Mr. Suresh Namgiri", designation: "Assistant Professor", cabin: 169 },
  { sno: 70, name: "Mr. Badita Kali Vara Prasad", designation: "Assistant Professor", cabin: 170 },
  { sno: 71, name: "Dr. Koganti Sripath Roy", designation: "Assistant Professor", cabin: 171 },
  { sno: 72, name: "Dr. Karra Sony", designation: "Assistant Professor", cabin: 172 },
  { sno: 73, name: "Dr. SK Babu", designation: "Assistant Professor", cabin: 173 },
  { sno: 74, name: "Ms. Kolachana Swetha", designation: "Assistant Professor", cabin: 174 },
  { sno: 75, name: "Dr. T. Nageswara Rao", designation: "Assistant Professor", cabin: 175 },
  { sno: 76, name: "Mr. Palagani Srikanth Reddy", designation: "Assistant Professor", cabin: 176 },
  { sno: 77, name: "Dr. Kasi Uday Kiran", designation: "Assistant Professor", cabin: 177 },
  { sno: 78, name: "Dr. Vankayalapati Sahiti", designation: "Assistant Professor", cabin: 178 },
  { sno: 79, name: "Mr. Ramaiah Challa", designation: "Assistant Professor", cabin: 179 },
  { sno: 80, name: "Dr. K. Suresh Kumar", designation: "Assistant Professor", cabin: 180 },
  { sno: 81, name: "Dr. Kambhampati Venkata Sowmya", designation: "Assistant Professor", cabin: 181 },
  { sno: 82, name: "Dr. Nadakuduru Venkata Ramana", designation: "Assistant Professor", cabin: 182 },
  { sno: 83, name: "Dr. Karri Radha", designation: "Assistant Professor", cabin: 183 },
  { sno: 84, name: "Dr. Sowmya Ranjan Panda", designation: "Assistant Professor", cabin: 184 },
  { sno: 85, name: "Dr. Rudraraju Sridevi", designation: "Assistant Professor", cabin: 185 },
  { sno: 86, name: "Dr. Sujatha Guntur", designation: "Assistant Professor", cabin: 186 },
  { sno: 87, name: "Mr. Kalluri Venkata Ravi", designation: "Assistant Professor", cabin: 187 },
  { sno: 88, name: "Dr. Kakatiya Bhupal", designation: "Assistant Professor", cabin: 188 },
  { sno: 89, name: "Mr. Deva Kumar L N", designation: "Assistant Professor", cabin: 189 },
  { sno: 90, name: "Dr. Surampalli Prameela", designation: "Assistant Professor", cabin: 190 },
  { sno: 91, name: "Dr. Ganta Sri Latha", designation: "Assistant Professor", cabin: 191 },
  { sno: 92, name: "Dr. Peraka Rajya Laxmi", designation: "Assistant Professor", cabin: 192 },
  { sno: 93, name: "Mr. T. Ashok Kumar", designation: "Assistant Professor", cabin: 193 },
  { sno: 94, name: "Dr. Satya Madhavi", designation: "Assistant Professor", cabin: 194 },
  { sno: 95, name: "Dr. K. C. Jaya Sankar", designation: "Assistant Professor", cabin: 195 },
  { sno: 96, name: "Dr. Nadendla Pavani", designation: "Assistant Professor", cabin: 196 },
  { sno: 97, name: "Dr. Bharat Bhushan Das", designation: "Assistant Professor", cabin: 197 },
  { sno: 98, name: "Dr. Poluri Raju", designation: "Assistant Professor", cabin: 198 },
  { sno: 99, name: "Dr. K. Deepak", designation: "Assistant Professor", cabin: 199 },
    ],
  },
  {
    department: "Computer Science Engineering",
    alias: ["CSE"],
    name: "Dr. T. Pavan Kumar",
    cabin: "Room 201",
    facultyList: [
      { name: "Dr. Haritha Reddy", cabin: "Room 202" },
      { name: "Prof. Ram Prasad", cabin: "Room 203" },
    ],
  },
  {
    department: "Honors Through Experiential Learning",
    alias: ["HTE"],
    name: "Dr.Ashwin Kumar",
    cabin: "R-001(ground floor)",
  },
  {
    department: "Artificial Intelligence and Data Science",
    alias: ["AIDS"],
    name: "Dr. B. Tirapathi Reddy",
    cabin: "R-401",
    facultyList: [
 { sno: 1, name: "Dr. B. Tirapathi Reddy", designation: "Professor & HOD", cabin: 200 },
  { sno: 2, name: "Dr. V. S. Bhagavan", designation: "Professor", cabin: 201 },
  { sno: 3, name: "Dr. Vishnubhotla Rama Krishna", designation: "Professor", cabin: 202 },
  { sno: 4, name: "Dr. Praveen Kumar Pinjala", designation: "Professor", cabin: 203 },
  { sno: 5, name: "Dr. Tiruveedhula Sajana", designation: "Associate Professor", cabin: 204 },
  { sno: 6, name: "Dr. E S Sharmila Sigamany", designation: "Associate Professor", cabin: 205 },
  { sno: 7, name: "Dr. Jagjit Singh Dhatterwal", designation: "Associate Professor", cabin: 206 },
  { sno: 8, name: "Dr. Elangovan Guruva Reddy", designation: "Associate Professor", cabin: 207 },
  { sno: 9, name: "Dr. Sunitha Pachala", designation: "Associate Professor", cabin: 208 },
  { sno: 10, name: "Dr. Bolla Sreenivasulu", designation: "Associate Professor", cabin: 209 },
  { sno: 11, name: "Dr. Tarak Hussain", designation: "Associate Professor", cabin: 210 },
  { sno: 12, name: "Dr. K. Anu Radha", designation: "Associate Professor", cabin: 211 },
  { sno: 13, name: "Dr. P. Manikya Prasuna", designation: "Associate Professor", cabin: 212 },
  { sno: 14, name: "Dr. Sivapurapu Lavanya", designation: "Asst Professor", cabin: 213 },
  { sno: 15, name: "Dr. S. Venumadhava Sarma", designation: "Asst Professor", cabin: 214 },
  { sno: 16, name: "Dr. M. V. A. L. Narasimha Rao", designation: "Asst Professor", cabin: 215 },
  { sno: 17, name: "Mr. Koganti Anil Kumar", designation: "Asst Professor", cabin: 216 },
  { sno: 18, name: "Dr. Tellakula Anitha", designation: "Asst Professor", cabin: 217 },
  { sno: 19, name: "Dr. S. Ragamayi", designation: "Asst Professor", cabin: 218 },
  { sno: 20, name: "Dr. Kommala Pati Beaulah Glory", designation: "Asst Professor", cabin: 219 },
  { sno: 21, name: "Dr. Talasila Vamsidhar", designation: "Asst Professor", cabin: 220 },
  { sno: 22, name: "Dr. Mandapati Praveena", designation: "Asst Professor", cabin: 221 },
  { sno: 23, name: "Dr. Rudrabhathla Sai Kumar", designation: "Asst Professor", cabin: 222 },
  { sno: 24, name: "Ms. Arpita Roy", designation: "Asst Professor", cabin: 223 },
  { sno: 25, name: "Dr. Vahed Shakeel Ahammad", designation: "Asst Professor", cabin: 224 },
  { sno: 26, name: "Ms. Vuyyuru Lakshmi Lalitha", designation: "Asst Professor", cabin: 225 },
  { sno: 27, name: "Mr. Doddi Suresh Kumar", designation: "Asst Professor", cabin: 226 },
  { sno: 28, name: "Dr. N. B. Arune Kumar", designation: "Asst Professor", cabin: 227 },
  { sno: 29, name: "Mr. Gunti Surendra", designation: "Asst Professor", cabin: 228 },
  { sno: 30, name: "Mr. Karnati Raja Ram Mohan Rao", designation: "Asst Professor", cabin: 229 },
  { sno: 31, name: "Mr. Choutapalli Nagaraju", designation: "Asst Professor", cabin: 230 },
  { sno: 32, name: "Mr. Chintamaneni Phanikanth", designation: "Asst Professor", cabin: 231 },
  { sno: 33, name: "Ms. Pendem Swetha", designation: "Asst Professor", cabin: 232 },
  { sno: 34, name: "Dr. E. Raveendra Reddy", designation: "Asst Professor", cabin: 233 },
  { sno: 35, name: "Mr. V. Joe Nithin", designation: "Asst Professor", cabin: 234 },
  { sno: 36, name: "Dr. B. Sesikala", designation: "Asst Professor", cabin: 235 },
  { sno: 37, name: "Ms. Peeriga Radhika", designation: "Asst Professor", cabin: 236 },
  { sno: 38, name: "Mr. Faizal Nujumudeen", designation: "Asst Professor", cabin: 237 },
  { sno: 39, name: "Arunkumar P", designation: "Asst Professor", cabin: 238 },
  { sno: 40, name: "T. Sai Lakshmi", designation: "Asst Professor", cabin: 239 },
  { sno: 41, name: "Kanaparthi Sumalatha", designation: "Asst Professor", cabin: 240 },
  { sno: 42, name: "Dr. Saiyed Faiyaz Waris", designation: "Asst Professor", cabin: 241 },
  { sno: 43, name: "Shaik Jilani Basha", designation: "Asst Professor", cabin: 242 },
  { sno: 44, name: "Dr. Tamal Kumar Kundu", designation: "Asst Professor", cabin: 243 }
]
  },
  {
    department: "Computer Science and Information Technology",
    alias: ["CSIT"],
    name: "Dr. Suresh Kumar",
    cabin: "Room 401",
    facultyList: [
      { "sno": 1, "name": "Dr. Kothalanka Amareendra", "designation": "Professor & HOD" },
  { "sno": 2, "name": "Dr. Manchiraju Kameswara Rao", "designation": "Professor" },
  { "sno": 3, "name": "Dr. Ganga Rama Koteswara Rao", "designation": "Professor" },
  { "sno": 4, "name": "Dr. K. Rama Krishna", "designation": "Professor" },
  { "sno": 5, "name": "Dr. Sridevi Emandi", "designation": "Associate Professor" },
  { "sno": 6, "name": "Dr. Sanda Sri Harsha", "designation": "Associate Professor" },
  { "sno": 7, "name": "Dr. Maydiga Madhusudana Subramanyam", "designation": "Associate Professor" },
  { "sno": 8, "name": "Dr. Marapelli Bhaskar", "designation": "Associate Professor" },
  { "sno": 9, "name": "Dr. B. Hanumantha Rao", "designation": "Associate Professor" },
  { "sno": 10, "name": "Dr. Yerramsetty Tayar", "designation": "Associate Professor" },
  { "sno": 11, "name": "Dr. N. Neelima", "designation": "Associate Professor" },
  { "sno": 12, "name": "Dr. Swarna Anjali Devi", "designation": "Asst Professor" },
  { "sno": 13, "name": "Dr. P V V S Srinivas", "designation": "Asst Professor" },
  { "sno": 14, "name": "Dr. Visamsetty Venkata Surya Sasank", "designation": "Asst Professor" },
  { "sno": 15, "name": "Dr. Sonthi Vijaya Krishna", "designation": "Asst Professor" },
  { "sno": 16, "name": "Dr. Bathina Rajesh Kumar", "designation": "Asst Professor" },
  { "sno": 17, "name": "Ms. Pacha Supriya", "designation": "Asst Professor" },
  { "sno": 18, "name": "Mr. Bejjam Surendranadh Benarji", "designation": "Asst Professor" },
  { "sno": 19, "name": "Mr. Kavuri Sreekanth", "designation": "Asst Professor" },
  { "sno": 20, "name": "Ms. Babu Keerthi Samhitha", "designation": "Asst Professor" },
  { "sno": 21, "name": "Mr. Penumacha Vikram", "designation": "Asst Professor" },
  { "sno": 22, "name": "Mr. Nyakapu Rajender", "designation": "Asst Professor" },
  { "sno": 23, "name": "Dr. G Kadiravan", "designation": "Asst Professor" },
  { "sno": 24, "name": "Ms. Nuthakki Praveena", "designation": "Asst Professor" },
  { "sno": 25, "name": "Ms. Yalavarthi Sai Eswari", "designation": "Asst Professor" },
  { "sno": 26, "name": "Mr. Bheemisetty Venkata Sriram Pavan Kumar", "designation": "Asst Professor" },
  { "sno": 27, "name": "Mr. P. Neelakanteswara", "designation": "Asst Professor" },
  { "sno": 28, "name": "G. Tagore Sai Prasad", "designation": "Asst Professor" },
  { "sno": 29, "name": "Jupalli Raja Kumari", "designation": "Asst Professor" },
  { "sno": 30, "name": "Buradagunta Swathi Sri", "designation": "Asst Professor" },
  { "sno": 31, "name": "N. Muralikrishna", "designation": "Asst Professor" },
  { "sno": 32, "name": "N. Mallikharjuna Rao", "designation": "Asst Professor" },
  { "sno": 33, "name": "Mr. A. Ravi Kumar", "designation": "Asst Professor" },
  { "sno": 34, "name": "Ch. Lavanya Susanna", "designation": "Asst Professor" },
  { "sno": 35, "name": "M. Chaitanya Kumari", "designation": "Asst Professor" },
  { "sno": 36, "name": "Ch. Ramesh Kumar", "designation": "Asst Professor" },
  { "sno": 37, "name": "Dr. G Sateesh", "designation": "Asst Professor" }
    ],
  },
  {
    department: "Electrical and Electronics Engineering",
    alias: ["EEE"],
    name: "Dr. R. Ramesh",
    cabin: "Room 501",
    facultyList: [
      { sno: 1, name: "Dr. A. Pandian", designation: "Professor & HOD", cabin: 244 },
  { sno: 2, name: "Dr. Burthi Loveswara Rao", designation: "Professor", cabin: 245 },
  { sno: 3, name: "Dr. Kuthuri Narasimha Raju", designation: "Professor", cabin: 246 },
  { sno: 4, name: "Dr. Jarupula Somlal", designation: "Professor", cabin: 247 },
  { sno: 5, name: "Dr. Kotamraju Subba Rao", designation: "Professor", cabin: 248 },
  { sno: 6, name: "Dr. R. Bhanu Raghava Prakash", designation: "Associate Professor", cabin: 249 },
  { sno: 7, name: "Dr. Batchalakuri Jyothi", designation: "Associate Professor", cabin: 250 },
  { sno: 8, name: "Dr. Pinni Srinivasa Varma", designation: "Associate Professor", cabin: 251 },
  { sno: 9, name: "Dr. Malligunta Kiran Kumar", designation: "Associate Professor", cabin: 252 },
  { sno: 10, name: "Mr. Daka Sesi Reddy", designation: "Asst Professor", cabin: 253 },
  { sno: 11, name: "Mr. D. Kalyan", designation: "Asst Professor", cabin: 254 },
  { sno: 12, name: "Ms. Kota Sarada", designation: "Asst Professor", cabin: 255 },
  { sno: 13, name: "Mr. Tadivaka Teja Sreenu", designation: "Asst Professor", cabin: 256 },
  { sno: 14, name: "Dr. Tadanki Vijay Muni", designation: "Asst Professor", cabin: 257 },
  { sno: 15, name: "Dr. G. Swapna", designation: "Asst Professor", cabin: 258 },
  { sno: 16, name: "Mr. Srungaram Ravi Teja", designation: "Asst Professor", cabin: 259 },
  { sno: 17, name: "Dr. Goda Ganesh Raja Sekhar", designation: "Asst Professor", cabin: 260 }
    ],
  },
  {
    department: "Mechanical Engineering",
    alias: ["Mech"],
    name: "Dr. R. Vijay Kumar",
    cabin: "Room 601",
    facultyList: [
      { sno: 1, name: "Dr. T Vijaya Kumar", designation: "Associate Professor & HOD", cabin: 261 },
  { sno: 2, name: "Dr. Adusumilli Srinath", designation: "Professor", cabin: 262 },
  { sno: 3, name: "Dr. Konijeti Rama Krishna", designation: "Professor", cabin: 263 },
  { sno: 4, name: "Dr. Surya Narayana Padhi", designation: "Professor", cabin: 264 },
  { sno: 5, name: "Dr. Garikapati Diwakar", designation: "Professor", cabin: 265 },
  { sno: 6, name: "Dr. G Murali", designation: "Professor", cabin: 266 },
  { sno: 7, name: "Dr. V.L. Mangesh", designation: "Professor", cabin: 267 },
  { sno: 8, name: "Dr. A V Siva Ram Prasad", designation: "Associate Professor", cabin: 268 },
  { sno: 9, name: "Dr. Devulapalli V.A. Rama Sastry", designation: "Associate Professor", cabin: 269 },
  { sno: 10, name: "Dr. G Yedukondalu", designation: "Associate Professor", cabin: 270 },
  { sno: 11, name: "Dr. Kanchu Venkata Durga Rajesh", designation: "Associate Professor", cabin: 271 },
  { sno: 12, name: "Dr. Pothamsetty Kasi Visweswara Rao", designation: "Associate Professor", cabin: 272 },
  { sno: 13, name: "Dr. Priyaranjan Sharma", designation: "Associate Professor", cabin: 273 },
  { sno: 14, name: "Mr. Sunkara Ramesh Kumar", designation: "Asst Professor", cabin: 274 },
  { sno: 15, name: "Dr. Tumuluri Kanthimathi", designation: "Asst Professor", cabin: 275 },
  { sno: 16, name: "Dr. Kruthiventi Sai Sarath", designation: "Asst Professor", cabin: 276 },
  { sno: 17, name: "Mr. Daggumalli Srinivasa Rao", designation: "Asst Professor", cabin: 277 },
  { sno: 18, name: "Mr. Karimulla Syed", designation: "Asst Professor", cabin: 278 },
  { sno: 19, name: "Dr. Vinay Atgur", designation: "Asst Professor", cabin: 279 },
  { sno: 20, name: "Mr. Udaysankar Muvva", designation: "Asst Professor", cabin: 280 },
  { sno: 21, name: "Dr. Arigela Sri Harsha", designation: "Asst Professor", cabin: 281 },
  { sno: 22, name: "Dr. Priyaranjan Samal", designation: "Asst Professor", cabin: 282 },
  { sno: 23, name: "Dr. Giphin George", designation: "Asst Professor", cabin: 283 },
  { sno: 24, name: "Mr. Puttam Srinivasarao", designation: "Asst Professor", cabin: 284 }
    ],
  },
  {
    department: "Civil Engineering",
    alias: ["Civil"],
    name: "Dr. S. K. Reddy",
    cabin: "Room 701",
    facultyList: [
    [
  { "sno": 1, "name": "Dr. Palleboina Poluraju", "designation": "Professor & HOD", "cabin": "101" },
  { "sno": 2, "name": "Dr. Chappidi Hanumantha Rao", "designation": "Professor", "cabin": "202" },
  { "sno": 3, "name": "Dr. A.V.S. Prasad", "designation": "Professor", "cabin": "203" },
  { "sno": 4, "name": "Dr. A Aravindan", "designation": "Professor", "cabin": "104" },
  { "sno": 5, "name": "Dr. Sanjeet Kumar", "designation": "Associate Professor", "cabin": "305" },
  { "sno": 6, "name": "Dr. Atluri Venkateswara Rao", "designation": "Associate Professor", "cabin": "307" },
  { "sno": 7, "name": "Dr. Ashwin Narendra Raut", "designation": "Associate Professor", "cabin": "309" },
  { "sno": 8, "name": "Mr. K. Syam Chambrelin", "designation": "Asst Professor", "cabin": "401" },
  { "sno": 9, "name": "Mr. Kommineni Hemanth Raja", "designation": "Asst Professor", "cabin": "402" },
  { "sno": 10, "name": "Dr. Yerramsetty Himath Kumar", "designation": "Asst Professor", "cabin": "403" },
  { "sno": 11, "name": "Mr. Bodapati Gnana Rahul", "designation": "Asst Professor", "cabin": "404" },
  { "sno": 12, "name": "Dr. Jagarapu Durga Chaitanya Kumar", "designation": "Asst Professor", "cabin": "501" },
  { "sno": 13, "name": "Ms. Velpula Sree Lakshmi", "designation": "Asst Professor", "cabin": "502" },
  { "sno": 14, "name": "Mr. Kanneganti Jyothishya Brahma Chari", "designation": "Asst Professor", "cabin": "503" },
  { "sno": 15, "name": "Dr. Lingeshwaran N", "designation": "Asst Professor", "cabin": "601" },
  { "sno": 16, "name": "Dr. Anu Mary Ealias", "designation": "Asst Professor", "cabin": "602" }
]

    ],
  },
  {
    department: "Internet of Things",
    alias: ["IoT"],
    name: "Dr. Sunil Kumar",
    cabin: "Room 801",
    facultyList: [
      { "sno": 1, "name": "Dr. Penke Satyanarayana", "designation": "Professor & HOD" },
  { "sno": 2, "name": "Dr. Miryala Sridhar", "designation": "Professor" },
  { "sno": 3, "name": "Dr. Santosh Kumar", "designation": "Professor" },
  { "sno": 4, "name": "Dr. Tatini Narendra Babu", "designation": "Associate Professor" },
  { "sno": 5, "name": "Dr. Ganesh Babu Rajendran", "designation": "Associate Professor" },
  { "sno": 6, "name": "Dr. Kottapalli Rajya Lakshmi", "designation": "Asst Professor" },
  { "sno": 7, "name": "Dr. Sridevi Sakhamuri", "designation": "Asst Professor" },
  { "sno": 8, "name": "Dr. Ch. Bhupathi", "designation": "Asst Professor" },
  { "sno": 9, "name": "Dr. Chatragadda Gopi Chand", "designation": "Asst Professor" },
  { "sno": 10, "name": "Mr. Pamarthi Venkata Siva Rambabu", "designation": "Asst Professor" },
  { "sno": 11, "name": "Dr. K.V. Vineetha", "designation": "Asst Professor" },
  { "sno": 12, "name": "Dr. Anand Kumar D", "designation": "Asst Professor" },
  { "sno": 13, "name": "Dr. P. Guru Krishna Thej", "designation": "Asst Professor" }
    ],
  },
];


function toggleSection(section) {
  const hodTab = document.getElementById("hod-tab");
  const facultyTab = document.getElementById("faculty-tab");
  const hodSection = document.getElementById("hod-section");
  const facultySection = document.getElementById("faculty-section");

  if (section === "hod") {
    // Highlight HOD tab
    hodTab.classList.add("bg-red-500", "text-white");
    hodTab.classList.remove("bg-white", "text-gray-700");

    // Reset Faculty tab
    facultyTab.classList.add("bg-white", "text-gray-700");
    facultyTab.classList.remove("bg-red-500", "text-white");

    // Show HOD section and hide Faculty section
    hodSection.style.display = "block";
    facultySection.style.display = "none";
  } else if (section === "faculty") {
    // Highlight Faculty tab
    facultyTab.classList.add("bg-red-500", "text-white");
    facultyTab.classList.remove("bg-white", "text-gray-700");

    // Reset HOD tab
    hodTab.classList.add("bg-white", "text-gray-700");
    hodTab.classList.remove("bg-red-500", "text-white");

    // Show Faculty section and hide HOD section
    facultySection.style.display = "block";
    hodSection.style.display = "none";
  }
}


  // Function to search HOD by name or department
  function searchHOD() {
    const searchValue = document.getElementById("search-input").value.toLowerCase();
    const resultDiv = document.getElementById("result");

    if (!searchValue) {
      resultDiv.innerHTML = `<p class="text-lg font-bold text-red-600">Please enter a department or HOD name to search.</p>`;
      return;
    }

    const found = hodData.find((hod) => {
      const searchIn = [
        hod.department.toLowerCase(),
        ...hod.alias.map((a) => a.toLowerCase()),
        hod.name.toLowerCase(),
      ];

      return searchIn.some((value) => value.includes(searchValue));
    });

    if (found) {
      resultDiv.innerHTML = `
        <p class="text-lg font-bold text-green-600">Result Found:</p>
        <p><strong>Department:</strong> ${found.department}</p>
        <p><strong>HOD Name:</strong> ${found.name}</p>
        <p><strong>Cabin Number:</strong> ${found.cabin || "Not Available"}</p>
      `;
    } else {
      resultDiv.innerHTML = `
        <p class="text-lg font-bold text-red-600">No Results Found</p>
        <p>Try searching with a different department or HOD name.</p>
      `;
    }
  }

  // Function to enable faculty search input
  function enableFacultySearch() {
    const departmentValue = document.getElementById("faculty-department").value;
    const facultyInput = document.getElementById("faculty-search-input");
    facultyInput.disabled = !departmentValue;
    facultyInput.value = "";
    document.getElementById("faculty-result").innerHTML = "";
  }

  // Function to search Faculty Cabin by department and name
  function searchFacultyCabin() {
    const departmentValue = document.getElementById("faculty-department").value;
    const facultySearchValue = document.getElementById("faculty-search-input").value.toLowerCase();
    const resultDiv = document.getElementById("faculty-result");

    if (!departmentValue) {
      resultDiv.innerHTML = `<p class="text-lg font-bold text-red-600">Please select a department first.</p>`;
      return;
    }

    if (!facultySearchValue) {
      resultDiv.innerHTML = `<p class="text-lg font-bold text-red-600">Please enter a faculty name.</p>`;
      return;
    }

    const selectedDepartment = hodData.find((hod) => hod.alias.includes(departmentValue));

    if (!selectedDepartment || !selectedDepartment.facultyList) {
      resultDiv.innerHTML = `<p class="text-lg font-bold text-red-600">Department not found or has no faculty listed.</p>`;
      return;
    }

    const foundFaculty = selectedDepartment.facultyList.find((faculty) =>
      faculty.name.toLowerCase().includes(facultySearchValue)
    );

    if (foundFaculty) {
      resultDiv.innerHTML = `
        <p class="text-lg font-bold text-green-600">Faculty Member Found:</p>
        <p><strong>Department:</strong> ${selectedDepartment.department}</p>
        <p><strong>Name:</strong> ${foundFaculty.name}</p>
        <p><strong>Cabin Number:</strong> ${foundFaculty.cabin || "Not Available"}</p>
      `;
    } else {
      resultDiv.innerHTML = `<p class="text-lg font-bold text-red-600">No faculty found in the selected department.</p>`;
    }
  }
