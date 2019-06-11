function mergeSort(nums) {
	// 有序合并两个数组
	function merge(l1, r1, l2, r2)
	{
		let arr = [];
		let index = 0;
		let i = l1, j = l2;
		while(i <= r1 && j <= r2)
		{
			arr[index++] = nums[i] < nums[j] ? nums[i++] : nums[j++];
		}
		while(i <= r1) arr[index++] = nums[i++];
		while(j <= r2) arr[index++] = nums[j++];
		// 将有序合并后的数组修改回原数组
		for(let t=0; t<index; t++) 
		{
			nums[l1 + t] = arr[t];
		}
	}
	// 递归将数组分为两个序列
	function recursive(left, right) 
	{
		if(left >= right)
		{
			return;
		} 
		// 比起(left+right)/2，更推荐下面这种写法，可以避免数溢出
		let mid = parseInt((right - left) / 2) + left;
		recursive(left, mid);
		recursive(mid+1, right);
		merge(left, mid, mid+1, right);
		return nums;
	}
	recursive(0, nums.length-1);
}
