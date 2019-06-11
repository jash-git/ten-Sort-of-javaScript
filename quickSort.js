function quickSort(nums) 
{
	// 递归排序基数左右两边的序列
	function recursive(arr, left, right) 
	{
		if(left >= right) return;
		let index = partition(arr, left, right);
		recursive(arr, left, index - 1);
		recursive(arr, index + 1, right);
		return arr;
	}
	// 将小于基数的数放到基数左边，大于基数的数放到基数右边，并返回基数的位置
	function partition(arr, left, right)
	{
		// 取第一个数为基数
		let temp = arr[left];
		while(left < right) {
		while(left < right && arr[right] >= temp) right--;
		arr[left] = arr[right];
		while(left < right && arr[left] < temp) left++;
		arr[right] = arr[left];
		}
		// 修改基数的位置
		arr[left] = temp;
		return left;
	}
	recursive(nums, 0, nums.length-1);
}
