
//                             QUESTION NO:1

// document.getElementById('signupForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;

//     document.getElementById('displayData').innerHTML = `
//       <h3>Submitted Data:</h3>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//     `;
//   });

//                              QUESTION NO:02

// document.getElementById('readMoreBtn').addEventListener('click', function() {
//     const moreText = document.getElementById('moreText');
//     if (moreText.style.display === 'none') {
//       moreText.style.display = 'inline';
//       this.textContent = 'Read less';
//     } else {
//       moreText.style.display === 'none';
//       this.textContent = 'Read more';
//     }
//   });


//                               Question No: 03

const studentForm = document.getElementById('studentForm');
        const studentTable = document.getElementById('studentTable').querySelector('tbody');
        const editForm = document.getElementById('editForm');
        const updateButton = document.getElementById('updateButton');
        const cancelButton = document.getElementById('cancelButton');

        let editRow = null;

        studentForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const grade = document.getElementById('grade').value;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${name}</td>
                <td>${age}</td>
                <td>${grade}</td>
                <td>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </td>
            `;

            studentTable.appendChild(row);
            studentForm.reset();
        });

        studentTable.addEventListener('click', (event) => {
            if (event.target.classList.contains('delete')) {
                event.target.closest('tr').remove();
            } else if (event.target.classList.contains('edit')) {
                editRow = event.target.closest('tr');
                const cells = editRow.querySelectorAll('td');

                document.getElementById('editName').value = cells[0].textContent;
                document.getElementById('editAge').value = cells[1].textContent;
                document.getElementById('editGrade').value = cells[2].textContent;

                editForm.classList.remove('hidden');
            }
        });

        updateButton.addEventListener('click', () => {
            if (editRow) {
                const name = document.getElementById('editName').value;
                const age = document.getElementById('editAge').value;
                const grade = document.getElementById('editGrade').value;

                const cells = editRow.querySelectorAll('td');
                cells[0].textContent = name;
                cells[1].textContent = age;
                cells[2].textContent = grade;

                editForm.classList.add('hidden');
                editRow = null;
            }
        });

        cancelButton.addEventListener('click', () => {
            editForm.classList.add('hidden');
            editRow = null;
        });