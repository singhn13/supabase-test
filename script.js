import { createClient } from "https://esm.sh/@supabase/supabase-js";
const supabaseUrl = 'https://sgqflcepwxvejnnivray.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNncWZsY2Vwd3h2ZWpubml2cmF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxNjE1MDYsImV4cCI6MjA1NzczNzUwNn0.U370HtfnXTwRDQw23lRfS3QTv2xf0IvKqWrMa_EeIzA';
const supabase = createClient(supabaseUrl, supabaseKey);


let { data: books, error } = await supabase
  .from('books')
  .select('*')

for (let book of books) {
  let bookList = document.getElementById('books');
  let row = `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td></tr>`;
  bookList.innerHTML += row;
}