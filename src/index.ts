const div = (a: number, b: number, rounding?: true): number => {
  const res = a / b;
  if (rounding) {
    return Math.round(res);
  }
  return res;
};

div(15, 4, true);
div(15, 3);
div(10, 2);

type Student = {
  firstname: string;
  lastname: string;
  age: number;
  bornCity?: string;
};

type HttpResponsePending = {
  status: 'pending';
};
type HttpResponseSuccess = {
  status: 'success';
  data: [];
};
type HttpResponseFiled = {
  status: 'failed';
  error: string;
};

type HttpResponse = HttpResponsePending | HttpResponseSuccess | HttpResponseFiled;

const fetchData = (res: HttpResponse): void => {
  if (res.status === 'pending') {
    res.status;
  }
  if (res.status === 'success') {
    res.data;
  }
  if (res.status === 'failed') {
    res.error;
  }
};
