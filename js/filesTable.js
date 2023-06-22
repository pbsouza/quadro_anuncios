import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

export async function getFilesTable() {
  const supabaseUrl = 'https://srbenyjiifliphdkgdpg.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyYmVueWppaWZsaXBoZGtnZHBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5NTA2MzgsImV4cCI6MjAwMjUyNjYzOH0.D20epHPh9ppjdBEjVR4yJ9XMYBaN_fUYZpznq4kg0ig';
  const supabase = createClient(supabaseUrl, supabaseKey);

  return new Promise((resolve, reject) => {
    window.addEventListener('DOMContentLoaded', async () => {
      // Realizando a consulta no banco de dados Supabase
      const { data, error } = await supabase
        .from('mwb')
        .select('*');

      if (error) {
        console.error(error);
        reject(error); // Rejeita a Promise em caso de erro
      } else {
        console.log('Tabela importada com sucesso');
        resolve(data); // Resolve a Promise com o valor de 'data'
      }
    });
  });
}

