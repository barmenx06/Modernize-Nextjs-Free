'use client';

import { useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, TextField, Paper } from '@mui/material';
import dayjs from 'dayjs';

const mockData = [
  { duetime: 1691145600000, first_stop: 'A', last_stop: 'B', deviceid: 101 }, // örnek veri
  { duetime: 1691149200000, first_stop: 'B', last_stop: 'C', deviceid: 102 },
];

export default function PublicSchedule() {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));

  const filtered = mockData.filter((item) => {
    const date = dayjs(item.duetime).format('YYYY-MM-DD');
    return date === selectedDate;
  });

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Sefer Planı</Typography>

      <TextField
        type="date"
        label="Tarih Seç"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        sx={{ mb: 3 }}
      />

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Saat</TableCell>
              <TableCell>Başlangıç</TableCell>
              <TableCell>Bitiş</TableCell>
              <TableCell>Otobüs No</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((job, i) => (
              <TableRow key={i}>
                <TableCell>{dayjs(job.duetime).format('HH:mm')}</TableCell>
                <TableCell>{job.first_stop}</TableCell>
                <TableCell>{job.last_stop}</TableCell>
                <TableCell>{job.deviceid}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}
