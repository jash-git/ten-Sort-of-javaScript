function quickSort1(nums) 
{
	function recursive(arr, left, right)
	{
		if(left >= right) return;
		let index = partition(arr, left, right);
		recursive(arr, left, index - 1);
		recursive(arr, index + 1, right);
		return arr;
	}
	function partition(arr, left, right)
	{
		let temp = arr[left];
		let p = left + 1;
		let q = right;
		while(p <= q)
		{
			while(p <= q && arr[p] < temp) p++;
			while(p <= q && arr[q] > temp) q--;
			if(p <= q) 
			{
				[arr[p], arr[q]] = [arr[q], arr[p]];
				// 交换值后两边各向中间推进一位
				p++;
				q--;
			}
		}
		// 修改基数的位置
		[arr[left], arr[q]] = [arr[q], arr[left]];
		return q;
	}
	recursive(nums, 0, nums.length-1);
}
